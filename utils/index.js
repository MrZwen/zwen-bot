module.exports = {
    updatePlayerCount: (client, seconds) => {
        const interval = setInterval(function setStatus(){
            //> 20 player(s)
            let status = `${GetNumPlayerIndices()}player(s)`
            client.user.setActivity(status, {type: "PLAYING"})
            return setStatus
        }(), seconds * 1000)
    }
}