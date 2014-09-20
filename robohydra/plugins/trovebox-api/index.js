var heads               = require("robohydra").heads,
    RoboHydraHeadStatic = heads.RoboHydraHeadStatic;

exports.getBodyParts = function() {
    return {
        heads: [],

        scenarios: {
            oneSearchResult: {
                heads: [
                    new RoboHydraHeadStatic({
                        path: '/photos/list.json',
                        content: {
                            "code": 200,
                            "message": "Successfully retrieved user's photos",
                            "result": [
                                {"active": "1",
                                 "actor": "blah@example.com",
                                 "albums": [],
                                 "appId": "openphoto-frontend",
                                 "currentPage": 1,
                                 "currentRows": 1,
                                 "dateSortByDay": "20140906101046",
                                 "dateTaken": "1410036553",
                                 "dateTakenDay": "6",
                                 "dateTakenMonth": "9",
                                 "dateTakenYear": "2014",
                                 "dateUploaded": "1410956185",
                                 "dateUploadedDay": "17",
                                 "dateUploadedMonth": "9",
                                 "dateUploadedYear": "2014",
                                 "description": "",
                                 "exifCameraMake": "HTC",
                                 "exifCameraModel": "HTC One S",
                                 "exifExposureTime": "10008/1000000",
                                 "exifFNumber": "",
                                 "exifFocalLength": "3.63",
                                 "exifISOSpeed": "185",
                                 "filenameOriginal": "IMAG0812_BURST002.jpg",
                                 "groups": "",
                                 "hash": "fdefa3f0e03afbb4b9443c0eab1947bb041c06ce",
                                 "height": "1840",
                                 "host": "photos.example.com/photos",
                                 "id": "1",
                                 "key": null,
                                 "latitude": null,
                                 "license": "",
                                 "longitude": null,
                                 "owner": "blah@example.com",
                                 "pageSize": 30,
                                 "path500x300": "https://photos.example.com/photos/custom/201409/IMAG0812_BURST002-67d096_500x300.jpg",
                                 "pathBase": "https://photos.example.com/photos/base/201409/IMAG0812_BURST002-67d096.jpg",
                                 "permission": "1",
                                 "photo500x300": [
                                     "https://photos.example.com/photos/custom/201409/IMAG0812_BURST002-67d096_500x300.jpg",
                                     500,
                                     281
                                 ],
                                 "rotation": "0",
                                 "size": "2081",
                                 "status": "1",
                                 "tags": [
                                     "2014",
                                     "September"
                                 ],
                                 "title": "",
                                 "totalPages": 1,
                                 "totalRows": 1,
                                 "url": "https://photos.example.com/p/1",
                                 "views": "0",
                                 "width": "3264"}
                            ]
                        }
                    })
                ]
            }
        }
    };
};