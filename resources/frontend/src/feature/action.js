
export async function getAddress(zipCode) {
    let zipCodePattern = /(^\d{3}-\d{4})|^\d{7}$/;

    if (zipCodePattern.test(zipCode)) {
        let prefecture = null;
        let area = null;
        let address = null;
        const endPoint =
            "https://zipcloud.ibsnet.co.jp/api/search?zipcode=" + zipCode;
        await fetch(endPoint)
            .then((res) => res.json())
            .then((data) => {
                if(data) {
                    status = data.status;
                    prefecture = data.results[0].address1;
                    area = data.results[0].address2;
                    address = data.results[0].address3;
                } else {
                    return null;
                }
            })
            .catch((error) => {
                console.log(error);
            });
        return { prefecture, area, address }
    }
}

export const previewThumbnail = (file) => {
    return new Promise((resolve, reject) => {
        let fileType = file.type;
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            if (fileType.includes("image")) {
                const imgContent = reader.result;
                resolve(imgContent);
            }
        };
        reader.onerror = () => {
            reject(new Error("Failed to read the file."));
        };
    });
};