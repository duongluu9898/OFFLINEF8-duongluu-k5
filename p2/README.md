# Các bước làm form

1. làm phần lấy dữ liệu khi nhập input

- tạo state setForm rỗng.
- tạo func handleSubmit với thẻ form, handleChange với thẻ input
- trong func handleChange lấy ra name, value qua:

* const name = e.target.name
* const value = e.target.value
  ===> sau đó đưa dữ liệu vào setForm như sau:
  setForm({...form, [name] : value})

2. làm hiển thị lỗi khi nhập input

- tạo state là object rỗng
- tạo 1 object errorObj rỗng
- destruc name, email = form
  const {name, email} = form
- đưa điều kiện khi name hoặc email là underfine hoặc null
  thì hiện mess
  if(!name) {
  errorObj.name ="This is error"
  }
- đưa errorObj vào setError
- hiển this mess lỗi: {error.name}

3. hiển thị các user đã nhập lên giao diện

- check điều kiện nếu không có lỗi thì render

* (!Object.keys(errorObj).length) không bị lỗi thì render
* destruc const user = {name, email}

- đưa user, users vào setUser
  setUser([user, ...users])
- map users vaf desstruc name, email, index rồi hiển thị trên giao diện

4. ẩn thông tin đã nhập khi submit

- tạo setForm rỗng trong handleSubmit
- gán value trong input bằng rỗng: value={form.name ?? "}

5. xóa các user

- viết hàm handleRemove có tham số index
- đưa vào hàm setUser và dùng filter lọc. trả về user có \_index khác index ban đầu:
  setUser(users.filter((user, \_index) => \_index !== index));
