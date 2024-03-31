import AWS from "aws-sdk";


const useUploadS3 = () => {

    const REGION = "us-east-1";
    AWS.config.update({
        accessKeyId: "AKIAQ3EGVKYHVYGS6HF2",
        secretAccessKey: "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",
        region: REGION
    });

    const uploadFile = async (file) => {
        // S3 Bucket Name
        console.log(file)
        const S3_BUCKET = "elektrondevdemo";// "s3://elektrondevdemo/users_file_landing_location/";

        // S3 Credentials
        AWS.config.update({
            accessKeyId: "AKIAQ3EGVKYHVYGS6HF2",
            secretAccessKey: "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",
            region: REGION
        });
        const s3 = new AWS.S3();

        const params = {
            Bucket: S3_BUCKET,
            Key: `users_file_landing_location/` + file.name,
            Body: file,
        };
        var upload = s3
            .upload(params, (err, data) => {
                console.log(err, data)
            })

    };

    return { uploadFile }
}

export default useUploadS3;