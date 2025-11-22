const fs = require('fs');
const path = require('path');
const {Transform} = require('stream')
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors())
var multer  = require('multer');
const storage = multer.memoryStorage();
var upload = multer({ storage});
const XLSX = require('xlsx')
var _ = require('lodash');
const { DateTime } = require('luxon');
// const sharp = require('sharp')

// const inputFilePath = path.join("data", "test.txt");
// const outputFilePath = path.join("data", "testoutput.txt");

// const readStream = fs.createReadStream(inputFilePath,  {encoding: "utf-8"});
// const writeStream = fs.createWriteStream(outputFilePath);

// const transform = new Transform({
//     transform(chunk, encoding, callback) {
//         this.push(chunk.toString().toUpperCase())
//         callback();
//     }
// })
// let data = ''
// fs.writeFile(outputFilePath, data, (err) => {
//     if(err) {
//        console.log("error"); 
//     }
// })

// readStream.pipe(transform).pipe(writeStream)

// readStream.on("data", (chunk) => {
//     console.log("data :", chunk)
// });

// readStream.on("end", () => {
//     console.log("data ended")
// });

// readStream.on("error", () => {
//     console.log("error on data")
// });

app.get("/", async (req,res) => {
    res.status(200).send("welcome")
})

app.get("/message", async (req,res) => {
    res.status(202).send("error on loading video")
})

app.post("/files", upload.array('files', 2),async (req, res) => {
let body = req.body;
let query = req.query;
let params = req.params;
let files = req.files;

let firstRows = [];
let xlsxFiles = [];
let fileNames = [];
let index = 0;
let claimsReport = [];
let paymentReport = [];
let chartIds = [];
let uniqueChartIds = []
let groupedChartIds = []

let paymentChartIds = [];
let paymentUniqueChartIds = []
let paymentGroupedChartIds = []
for (const file of files) {
    fileNames.push(file.originalname);
    const xlsxFile = path.extname(file.originalname);
    if(xlsxFile !== '.xlsx') {
    res.status(400).send("bad file")
    }
    xlsxFiles.push(xlsxFile);
    const workbook = XLSX.read(file.buffer, { type: "buffer" });
    const sheetName = workbook.SheetNames[0]; // First sheet
    const sheet = workbook.Sheets[sheetName];
    
    // Convert sheet to JSON and get first row
    let data = XLSX.utils.sheet_to_json(sheet, { header: 1 });
    const firstRow = data.length > 0 ? index > 0 ? data[4] : data[0] : [];
    console.log(file.originalname, typeof file.originalname);

    if(file.originalname.includes('Payment')) { 
        if(file.originalname.includes('Advance MD')) {
        data.splice(0, 5)
        for(const row of data) {
            paymentChartIds.push({chart: row[2].toString().trim(), procedure: row[8].toString().trim()});
        }

        paymentUniqueChartIds = _.uniq(paymentChartIds);
        paymentGroupedChartIds = paymentChartIds.reduce((result, row) => {
            if (!result.hasOwnProperty(row.chart)) {
              result[row.chart] = [];
            }
            
            result[row.chart].push(row);
            
            return result;
          }, {});
        } else if(file.originalname.includes('Tebra')) {

        } else if(file.originalname.includes('Ecw')) {
            data.splice(0, 1)
            for(const row of data) {
                paymentChartIds.push({chart: row[19].toString().trim(), procedure: row[2].toString().trim()});
                if (row[13]) {
                    let date = new Date((row[13] - 25569) * 86400000)
                    row[13] = DateTime.fromJSDate(date).toFormat('dd-MM-yyyy');
                }
                if (row[14]) {
                    let date = new Date((row[14] - 25569) * 86400000)
                    row[14] = DateTime.fromJSDate(date).toFormat('dd-MM-yyyy');
                }
                if (row[15]) {
                    let date = new Date((row[15] - 25569) * 86400000)
                    row[15] = DateTime.fromJSDate(date).toFormat('dd-MM-yyyy');
                }
                if (row[16]) {
                    let date = new Date((row[16] - 25569) * 86400000)
                    row[16] = DateTime.fromJSDate(date).toFormat('dd-MM-yyyy');
                }
                if (row[17]) {
                    let date = new Date((row[17] - 25569) * 86400000)
                    row[17] = DateTime.fromJSDate(date).toFormat('dd-MM-yyyy');
                }
                if (row[18]) {
                    let date = new Date((row[18] - 25569) * 86400000)
                    row[18] = DateTime.fromJSDate(date).toFormat('dd-MM-yyyy');
                }
                if (row[19]) {
                    let date = new Date((row[19] - 25569) * 86400000)
                    row[19] = DateTime.fromJSDate(date).toFormat('dd-MM-yyyy');
                }
            }
    
            paymentUniqueChartIds = _.uniq(paymentChartIds);
            paymentGroupedChartIds = paymentChartIds.reduce((result, row) => {
                if (!result.hasOwnProperty(row.chart)) {
                  result[row.chart] = [];
                }
                
                result[row.chart].push(row);
                
                return result;
              }, {});
        }
        paymentReport.push(...data)

        console.log('length of claims', paymentReport.length, 'length of charts', paymentChartIds.length, 'length of uniquecharts', paymentUniqueChartIds.length, "length of groupedChartIds", Object.keys(paymentGroupedChartIds).length);

    } else {
        if(file.originalname.includes('Advance MD')) {
            data.splice(0, 1)
            for(const row of data) {
                chartIds.push({chart: row[10].replace("Chart #:", "").trim(), procedure: row[19].toString().trim()});
            }
            uniqueChartIds = _.uniq(chartIds);
            groupedChartIds = chartIds.reduce((result, row) => {
                if (!result.hasOwnProperty(row.chart)) {
                result[row.chart] = [];
                }
                
                result[row.chart].push(row);
                
                return result;
            }, {});
        } else if(file.originalname.includes('Tebra')) {
            data.splice(0, 1)
            for(const row of data) {
                chartIds.push({chart: row[12]?.toString().trim(), procedure: row[16]?.split('-')[0]?.toString().trim()});
                if (row[24]) {
                    let date = new Date((row[24] - 25569) * 86400000)
                    row[24] = DateTime.fromJSDate(date).toFormat('dd-MM-yyyy');
                }
                // below 3 are mobile number columns, have to check and need to find a way to transform (888) 888-2563 this to mobile number format as 8888882563
                // if (row[2]) {
                //     row[2] = row[2].replace(/-| /g, '').replace('(', '').replace(')','');
                // }
                // if (row[3]) {
                //     row[3] = row[3].replace(/-| /g, '').replace('(', '').replace(')','');
                // }
                // if (row[6]) {
                //     row[6] = row[6].replace(/-| /g, '').replace('(', '').replace(')','');
                // }
                console.log(row[2])
            }
            uniqueChartIds = _.uniq(chartIds);
            groupedChartIds = chartIds.reduce((result, row) => {
                if (!result.hasOwnProperty(row.chart)) {
                result[row.chart] = [];
                }
                
                result[row.chart].push(row);
                
                return result;
            }, {});
        } else if(file.originalname.includes('Ecw')) {
            data.splice(0, 1)
            for(const row of data) {
                chartIds.push({chart: row[2].toString().trim(), procedure: row[13].toString().trim()});
            }
            uniqueChartIds = _.uniq(chartIds);
            groupedChartIds = chartIds.reduce((result, row) => {
                if (!result.hasOwnProperty(row.chart)) {
                result[row.chart] = [];
                }
                
                result[row.chart].push(row);
                
                return result;
            }, {});
        }
        claimsReport.push(...data)
        console.log('length of claims', claimsReport.length, 'length of charts', chartIds.length, 'length of uniquecharts', uniqueChartIds.length, "length of groupedChartIds", Object.keys(groupedChartIds).length);
    }
    firstRows.push(firstRow)

    console.log('done');
    index++;
}

    let finalClaims = [];

    let keys1 = Object.keys(groupedChartIds)
    let keys2 = Object.keys(paymentGroupedChartIds)

    let uniqueIds = Array.from(new Set([...keys1, ...keys2]))
    console.log('final unique values', uniqueIds, uniqueIds.length);

    for(const id of uniqueIds) {
        let claims = [];
        let payments = [];
        let procedures = [];
        let paymentProcedures = [];

        groupedChartIds[id]?.length > 0 ? groupedChartIds[id].forEach(el => {
            let code = el.procedure;
            procedures.push({code: code});
        }) : ''

        paymentGroupedChartIds[id]?.length > 0 ? paymentGroupedChartIds[id].forEach(el => {
            let code = el.procedure;
            paymentProcedures.push({code: code})
        }) : ''

        claims = {
            id : id,
            procedures: procedures,
            payments: paymentProcedures
        }
        finalClaims.push(claims);
    }
    let countOfSyncableData = 0;
    finalClaims.forEach(el => {
        if(el.procedures?.length > 0 && el.payments?.length > 0) {
            countOfSyncableData++
        }
    })
    console.log("final data: ", finalClaims.length, finalClaims, countOfSyncableData);

    res.json({
        fileNames,
        firstRows,
    });
console.log("done");
})

app.get("/videos/:video_id", async (req,res) => {
    console.log(req.params.video_id);
    let checkVideoExistence = fs.existsSync(path.join("data", `${req.params.video_id}.mp4`))
    if(!checkVideoExistence) {
        return res.status(400).send("Requested video not exists");
    }
    const videoPath = path.join("data", `${req.params.video_id}.mp4`);
    const stat = fs.statSync(videoPath);
    const fileSize = stat.size;
    const range = req.headers.range

    if (!range) {
        return res.status(400).send("Requires Range header");
    }

    const CHUNK_SIZE = 10 ** 6; // 1MB
    const parts = range.replace(/bytes=/, "").split("-");
    const start = parseInt(parts[0], 10);
    const end = parts[1] ? parseInt(parts[1], 10) : Math.min(start + CHUNK_SIZE, fileSize - 1);
    const contentLength = end - start + 1;

    console.log("range", range, parts, CHUNK_SIZE, start, end, contentLength);
    const headers = {
        "Content-Range": `bytes ${start}-${end}/${fileSize}`,
        "Accept-Ranges": "bytes",
        "Content-Length": contentLength,
        "Content-Type": "video/mp4",
    };

    res.writeHead(206, headers);
    const videoStream = fs.createReadStream(videoPath, { start, end });

    videoStream.pipe(res);
})


// Endpoint to upload and cartoonify the image
app.post('/cartoonify', upload.single('image'), async (req, res) => {
    try {
      // Ensure an image file is uploaded
      if (!req.file) {
        return res.status(400).send('No image uploaded.');
      }
  
      const inputPath = req.file.path;
      const outputPath = path.join(__dirname, 'cartoonified', `${Date.now()}_cartoon.png`);
  
      // Apply cartoon effect (simulated with sharp filters)
    //   await sharp(inputPath)
    //     .resize(800) // Resize for consistent processing
    //     .sharpen() // Enhance edges
    //     .tint({ r: 255, g: 200, b: 150 }) // Add a cartoon-like tint
    //     .toFile(outputPath);
  
      // Remove the original uploaded file to save space
      fs.unlinkSync(inputPath);
  
      // Respond with the processed image path
      res.status(200).send({ message: 'Image cartoonified successfully!', path: outputPath });
    } catch (error) {
      console.error(error);
      res.status(500).send('Error processing the image.');
    }
  });

app.listen(8000, async (req,res) => {
    console.log("running in :", 8000);
})









const getDateRange = (daysStart, daysEnd) => {
    const currentDate = new Date();
    const startDate = new Date(currentDate);
    startDate.setDate(currentDate.getDate() - daysEnd);
    
    const endDate = new Date(currentDate);
    endDate.setDate(currentDate.getDate() - daysStart);
  
    return { startDate, endDate };
  };
  
  function dateRange(range) {
     let dateRange;
        switch (range) {
        case "0-30":
          dateRange = getDateRange(0, 30);
          break;
        case "31-60":
          dateRange = getDateRange(31, 60);
          break;
        case "61-90":
          dateRange = getDateRange(61, 90);
          break;
        case "91-120":
          dateRange = getDateRange(91, 120);
          break;
        case "120+":
          dateRange = { startDate: new Date(), endDate: null }; // For dates older than 120 days
          break;
        default:
        console.log("no date")
          return;
      }
      console.log("dates", dateRange);
      return;
  }
   
      // Build the query based on the range
      const query = dateRange.endDate
      ? { service_date: { $gte: dateRange.startDate, $lt: dateRange.endDate } }
      : { service_date: { $lt: dateRange.startDate } };

//   console.log("0-30 next \n")
//   dateRange("0-30")
//   console.log("31-60 next \n")
//   dateRange("31-60")
//   console.log("61-90 next \n")
//   dateRange("61-90")
//   console.log("91-120 next \n")
//   dateRange("91-120")
//   console.log("120+ next \n")
//   dateRange("120+")


// in mongo db i have a collection and it has fields called name, service date and _id now i want to filter the records by 5 ways the service date should be
// 1. 0 to 30 days when compare to current date 
// 2. 31 to 60 days when compare to current date
// 3. 61 to 90 days when compare to current date
// 4. 91 to 120 days when compare to current date
// 5. 120+ days when compare to current date

// use moongose method and have one method to get it by passing the required values as filter

// what will be the api route endpoint for this to get the start date and end date from the front-end application


