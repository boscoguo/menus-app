const getSuitableSizeImg = (images: any[]) => {
    let url = ""
    images.forEach((element: any, index: number) => {
        if (element.ratio === "4_3") {
            url = element.url;
        }
    });
    return url;
}

export { getSuitableSizeImg };