## Hiển thị data sử dụng useEffect

1. render user

- gán link api
- tại state setUsers là 1 mảng rỗng
- tạo hàm async getUser, gán data vào setUser
- đưa hàm getUser vào useEffect có depend là []
- map users trả về id và name

2. làm phần loading

- tại state setLoading: giá trị mặc định là true
- gán giá trị false vào setLoading trong hàm getUser
- render giá trị mặc định "Loading..." bằng toán tử ba ngôi

3. làm phần toggle

- tạo state setShow, giá trị mặc định là true
- render giao diện với isShow &&
- ẩn đi với setShow(!isShow) gán vào hàm trong button

4. làm phần hiển thị lỗi khi sai đường dẫn

- tạo state setError: mặc định false
- tạo try catch: gán setError(e) trong catch
- dùng if(error) return về thẻ h2 báo lỗi
