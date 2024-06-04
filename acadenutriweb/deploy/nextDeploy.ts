import * as cdk from 'aws-cdk-lib';
import * as s3 from 'aws-cdk-lib/aws-s3';
import { Nextjs } from 'cdk-nextjs-standalone';

export class WebAppStack extends cdk.Stack {
  constructor(scope: cdk.App, props?: cdk.StackProps) {
    super(scope, 'AcadenutriWebsiteStack', props);

    const distBucket = new s3.Bucket(this, 'AcadenutriWebsiteAssets', {
      autoDeleteObjects: true,
      removalPolicy: cdk.RemovalPolicy.DESTROY,
    });

    new Nextjs(this, 'AcadenutriWebsiteApp', {
      nextjsPath: '../',
      imageOptimizationBucket: distBucket,
    });
  }
}

const app = new cdk.App();
new WebAppStack(app);
