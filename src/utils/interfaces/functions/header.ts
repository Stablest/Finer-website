function findHeaderFileName(headers: Headers, format? : boolean) {
    let fileName = 'finer_img'
    const content = headers.get('content-disposition')
    if (!content)
        return fileName
    fileName = content.split('filename=')[1].replaceAll('"', '')
    if (!format)
        fileName = fileName.split('.')[0]
    return fileName
}

export { findHeaderFileName }