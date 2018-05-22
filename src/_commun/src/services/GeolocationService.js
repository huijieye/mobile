
export default class {
    id = null;
    watch(callback){
        this.id = navigator.geolocation.watchPosition((pos) => {
            if(callback) {
                callback(pos);
            }
        })
    }

    stop(){
        navigator.geolocation.clearWatch(this.id)
    }
}