function formateFileName(name){
    console.log(name)
    let dotIndex = name.lastIndexOf('.');
    let sourceName = name.substring(dotIndex, name.length);
    let finalName = md5(sourceName)+ (new Date().getTime());

    return finalName + sourceName;
}

function $ajax(){
    options = Object.assign({
        url: '',
        method: 'post',
        data: null,
        headers: {}
    },options);

    return new Promise((resolve, reject) =>{
        let xhr = new XMLHttpRequest;
        xhr.open(options.method, options.url);
        Object.keys(options.headers).forEach(key =>{
            xhr.setRequestHeader(key, options.headers[key])
        })

        xhr.onreadystatechange = ()=>{
            if(xhr.readyState === 4){
                if(/^(2|3)\d{2}$/.test(xhr.status)){
                    resolve(JSON.parse(xhr.responseText))
                }
                reject(xhr);
            }

        };
        xhr.send();
    })
}


function _arrayBufferToBase64( buffer ) {
    var binary = '';
    var bytes = new Uint8Array( buffer );
    var len = bytes.byteLength;
    for (var i = 0; i < len; i++) {
        binary += String.fromCharCode( bytes[ i ] );
    }
    return window.btoa( binary );
}