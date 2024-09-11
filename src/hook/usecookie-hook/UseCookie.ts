interface CookieDataInterface {
    numberOfDays: number;
    cookieName: string;
    value: string;
    path: string;
}

function useCookie() {

    function handleGettingCookie(cookieName:any | string):boolean | RegExpMatchArray | undefined | string {
        let returnValue;
        if (cookieName !== null) {
            const Match = document.cookie.match(RegExp('(?:^|;\\s*)' + cookieName + '=([^;]*)'));
            returnValue = Match ? Match[1] : false;
        }
        return returnValue;
    }

    function handleSettingCookie(cookieData:CookieDataInterface | any): void {
        if (cookieData !== null) {
            const GetDate = new Date();
            GetDate.setTime(GetDate.getTime() + (cookieData.numberOfDays * 24 * 60 * 60 * 1000));
            const Expiration = "expires=" + GetDate.toUTCString();
            document.cookie = cookieData.cookieName + "=" + cookieData.value + ";" + Expiration + ";path=" + cookieData.path;
        }
    }

    return [handleGettingCookie, handleSettingCookie];
}

export default useCookie;