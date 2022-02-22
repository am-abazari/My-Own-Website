// Main Const
const validate = (data) => {
    //  Error Sets

    // Name Error Set
    const errors = {};
    if ((data.name.length === 0)) {
        errors.name = "Name required *";
    } else if (data.name[0].length < 4) {
        errors.name = "Name is to short *"
    } else {
        errors.name = true
    }


    // Email Error Set
    if ((data.email.length === 0)) {
        errors.email = "Email required *";
    } else if (data.email[0].length < 4) {
        errors.email = "Email is to short *";
    } else if (!data.email[0].includes("@") || !data.email[0].includes(".") || data.email[0].includes(" ")) {
        errors.email = "Email is invalid *";
    } else {
        errors.email = true
    }



    // Subject Error Set
    if ((data.subject.length === 0)) {
        errors.subject = "Subject required *";
    } else if (data.subject[0].length < 4) {
        errors.subject = "Subject is to short *";
    } else {
        errors.subject = true ;
    }


    // Message Error Set
    if ((data.message.length === 0)) {
        errors.message = "Message required *";
    } else if (data.message[0].length < 4) {
        errors.message = "Message is to short *";
    } else {
        errors.message = true
    }
    return errors;

}

// Exporting just the function **
export { validate };