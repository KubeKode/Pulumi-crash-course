"use strict";
const pulumi = require("@pulumi/pulumi");
const aws = require("@pulumi/aws");
const awsx = require("@pulumi/awsx");

// Create an AWS resource (S3 Bucket)







const bucket = new aws.s3.Bucket("my-bucket");

// Create an EC2 instance
const instance = new aws.ec2.Instance("my-instance",{
    ami: "ami-007855ac798b5175e",
    instanceType: "t2.micro",
    keyName: "k8s-persistent",
    tags: {
        Name: "my-ec2-instance"
    }
})
// Export the name of the bucket
exports.bucketName = bucket.id;
