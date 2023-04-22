"""An AWS Python Pulumi program"""

import pulumi
from pulumi_aws import s3
from pulumi_aws import ec2
# Create an AWS resource (S3 Bucket)
bucket = s3.Bucket('my-bucket')

# Create an EC2 instanc
instance = ec2.Instance("my-instance",instance_type= "t2.micro", ami="ami-007855ac798b5175e",tags={'Name': "web-server-new"} 
)

# Export the name of the bucket
pulumi.export('bucket_name', bucket.id)
