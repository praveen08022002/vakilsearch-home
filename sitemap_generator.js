const isQE = process.env.NODE_ENV == "isQE";
const isProd = process.env.NODE_ENV == "isProd";
const { exec } = require("child_process");

const executeCmd = (cmd) => {
  return new Promise((resolve, reject) => {
    exec(cmd, (err, stdout, stderr) => {
      if (err) {
        err.message = cmd + "\n" + err.message;
        return reject(err);
      }
      return resolve(stdout || stderr);
    });
  });
};

(async () => {
  try {;
    if (isQE) {
      const removeFilesFromS3 = await executeCmd(
        "aws s3 rm s3://qe-assets.vakilsearch.com/ / --recursive" // give Path
      );
      console.log(removeFilesFromS3);
      const copyFilesFromS3 = await executeCmd(
        "aws s3 cp .next/static/ s3://qe-assets.vakilsearch.com/ /_next/static/ --recursive --metadata-directive REPLACE --cache-control max-age=31536000" // give Path
      );
      console.log(copyFilesFromS3);
    }
    if (isProd) {
      const removeFilesFromS3 = await executeCmd(
        "aws s3 rm s3://assets.vakilsearch.com/ / --recursive" // give Path
      );
      console.log(removeFilesFromS3);
      const copyFilesFromS3 = await executeCmd(
        "aws s3 cp .next/static/ s3://assets.vakilsearch.com/ /_next/static/ --recursive --metadata-directive REPLACE --cache-control max-age=31536000" // give Path
      );
      console.log(copyFilesFromS3);
    }
  } catch (e) {
    console.error(e);
  }
})();
