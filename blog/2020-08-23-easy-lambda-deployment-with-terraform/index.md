---
templateKey: blog-post
title: Easy Lambda Deployment with Terraform
date: 2020-08-23T04:12:52.588Z
image: ./magnezis-magnestic-gislequnnwq-unsplash.jpg
tags:
  - AWS
  - Terraform
  - Lambda
---
As a developer, I love using Terraform for provisioning cloud infrastructure because of its comprehensive documentation and easy to use syntax/completion. However, a problem with developing AWS Lambda function via Terraform is that we usually need to create a lot of boilerplate code just for creating a simple function (see this [link ](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/lambda_function)for example). I created this terraform lambda module [aws-lambda](https://github.com/tuan231195/terraform-modules/tree/master/modules/aws-lambda) to significantly simplify the process. Let's look at a simple terraform example (<https://github.com/tuan231195/terraform-lambda-example>).

**Requirements**:

* Terraform version >= 0.13.0

```hcl
provider "aws" {
  region = "ap-southeast-2"
}

module "lambda" {
  source = "git::https://github.com/tuan231195/terraform-modules.git//modules/aws-lambda?ref=master"
  function_name = "test-terraform-lambda"
  handler = "index.handler"
  source_path = "${path.module}/src"
  runtime = "nodejs12.x"
  environment = {
    variables = {
      S3_BUCKET = aws_s3_bucket.s3.bucket
    }
  }
  policy = {
    json = <<EOF
{
  "Version": "2012-10-17",
  "Statement": [
    {
        "Action": [
            "s3:GetObject"
        ],
        "Resource": "arn:aws:s3:::${aws_s3_bucket.s3.bucket}/*",
        "Effect": "Allow"
    }
  ]
}
EOF
  }
  layer_config = {
    package_file = "${path.module}/src/package.json"
    compatible_runtimes = [
      "nodejs12.x"]
  }
}

resource "aws_s3_bucket" "s3" {
  bucket = "terraform-test-s3-bucket-lambda"
}

resource "aws_s3_bucket_object" "s3_item" {
  bucket = aws_s3_bucket.s3.bucket
  key = "response.json"
  content = <<EOF
{"message": "OK" }
EOF
}
```

I created a test s3 bucket with a simple JSON file in it to store the response of the lambda function. The lambda is created via the Terraform module with an IAM policy to allow it read-only access to the s3 bucket. I also specify a layer config to install node_modules from a specify package.json and store them inside the Lambda layer. You can have an additional look at this Terraform module [](https://github.com/tuan231195/terraform-modules/tree/master/modules/aws-lambda-layer)\[aws-lambda-layer](<https://github.com/tuan231195/terraform-modules/tree/master/modules/aws-lambda-layer) which is being used under the hood for more configuration options. 

The lambda config also specifies the path to the source folder which will be automatically archived and upload to AWS. Let's have a look at the source code:

```javascript
const get = require('lodash.get');
const AWS = require('aws-sdk');

const s3 = new AWS.S3({
    region: 'ap-southeast-2',
});

exports.handler = async function () {
    const s3Response = await s3.getObject({
        Bucket: process.env.S3_BUCKET,
        Key: 'response.json',
    }).promise();
    const body = JSON.parse(s3Response.Body.toString('utf-8'));
    return {
        message: get(body, "message"),
    };
};
```

The handler function will simply get the response content from the s3 bucket and then use `lodash.get` function to extract the property `message`from it. This is used to simply prove that the Lambda layer actually works.

To build the terraform stack, run:

```shell
terraform init
terraform apply --auto-approve
```

After the provision, You can that the Lambda has been created correctly:

![](/img/lambda.png)

This is the result of invoking the Lambda function

![](/img/lambda-results.png)

The full source code is available in this [Github](https://github.com/tuan231195/terraform-lambda-example)

**Happy coding!**
