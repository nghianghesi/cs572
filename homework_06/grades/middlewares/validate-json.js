var getRawBody = require('raw-body')
var contentType = require('content-type')


module.exports = function(req, res, next){    
    const contentTypeHeader = contentType.parse(req);
    const encoding = contentTypeHeader.parameters.charset;
    if (contentTypeHeader.type == "application/json"){
        const options = {
            length: req.headers['content-length'],
            limit: '1mb',
            encoding: encoding?encoding:'utf-8'
        };
        getRawBody(req, options, function (err, text) {
            if (err) return next(err);
            try {
                req.body = JSON.parse(text);
                return next();
            } catch (error) {
                return next({code:500, message:'invalid json format'});
            }
        }); 
    }else{
        return next();
    }
};
