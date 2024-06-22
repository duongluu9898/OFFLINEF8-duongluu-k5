## làm preview image

1. lấy thông tin image: handleChooseFile

- tạo state setImage là 1 mảng rỗng
- lấy link imagePreviewUrl bằng URL.createObjectURL(e.target.files[0])
- đưa imagePreviewUrl vào setImage:
  setImage({...image, preview: imagePreviewUrl})
- render image: image.preview &&
  <img src={image.preview} width={200} alt=""/>

2. làm uploadFile

- lấy thông tin file: file: e.target.files[0] ==> ở trong setImage
- tạo function async handleUploadFile
- destruc biến file = image
- tạo formData = new FormData();
- gán: formData.append("file", file)
- lấy biến response:
  const response = await fetch(`link`, {
  method: "POST",
  body: formData,
  })
  const data = await response.json()
- đưa link image vào setImage
  setImage({...image, imageUrl: data.location})

- render thông tin file:
  {image.imageUrl && (
  <p>
  Link image:{" "}
  <a href={image.imageUrl} target="_blank">
  {image.imageUrl}
  </a>
  </p>
  )}

3. reset image, link image
   useEffect(() => {
   return () => {
   URL.revokObjectURL(image.preview)
   };
   }, [image.preview, image.imageUrl])
