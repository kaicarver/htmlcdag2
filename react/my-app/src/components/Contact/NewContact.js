import React from 'react'

function NewContact() {
    return (
        <div>
            <form action="http://localhost:5000/submit-form-data" method="post">
                first name <input type="text" name="firstname" /><br />
                last name <input type="text" name="lastname" /><br />
                Email <input type="email" name="email" /><br />
                Message
                <textarea name="message" id="" cols="30" rows="10">
                </textarea><br />
                <input type="submit" value="Envoyer ma donnée" /><br />
            </form>
        </div>
    )
}

export default NewContact       