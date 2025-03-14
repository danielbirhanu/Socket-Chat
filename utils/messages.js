const moment = require('moment')

const formatMessage = (username, text) => {
    return {
        username,
        text,
        time: moment().format('h:mn a')
    }
}

module.exports = formatMessage