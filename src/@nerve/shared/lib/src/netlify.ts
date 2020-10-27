// https://www.netlify.com/blog/2017/07/20/how-to-integrate-netlifys-form-handling-in-a-react-app/

export const encodeNetlifyFormData = (data) => {
    return Object.keys(data)
        .map(
            (key) =>
                `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join('&');
};

export const handleNetlifyFormSubmit = async (formName, formData, event) => {
    fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encodeNetlifyFormData({ 'form-name': formName, ...formData }),
    })
        .then(() => alert('Success!'))
        .catch((error) => alert(error));

    event.preventDefault();
};
