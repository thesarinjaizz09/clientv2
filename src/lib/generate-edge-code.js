const crypto = require("crypto");

try {
    const len = 6;
    const generate__edge__code = () => {
        return crypto
            .randomBytes(Math.ceil(len / 2))
            .toString("hex")
            .slice(0, len);
    };

    module.exports = generate__edge__code;
} catch (error) {
    console.log(
        "Some error occured in Referral__Code__Generator.js " + error
    );
}