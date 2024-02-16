// console.log(require('crypto').randomBytes(128).toString('hex'))
const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const url = "http://localhost:8080/api/auth";
        const { data: res } = await axios.post(url, data);
        localStorage.setItem("token", res.data);
        window.location = "/";
    } catch (error) {
        if (
            error.response &&
            error.response.status >= 400 &&
            error.response.status <= 500
        ) {
            setError(error.response.data.message);
        }
    }
};