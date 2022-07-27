import React from 'react';

const Form = (props) => {

    const handleChange = event => {
        const { name, value } = event.target;
        props.change(name, value);
    }

    handleSubmit = event => {
        event.preventDefault();
        props.submit();
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Name
                <input>
                    placeholder="First and Last Name"
                    value={values.name}
                    name="name"
                    onChange={handleChange}
                </input>
            </label>
            <label>Email
                <input>
                    placeholder="Email"
                    value={values.email}
                    name="email"
                    onChange={handleChange}
                </input>
            </label>
            <label>Role
                <input>
                    placeholder="Role"
                    value={values.role}
                    name="role"
                    onChange={handleChange}
                </input>
            </label>
            <input>type="submit" value="Create Team"</input>
        </form>
    )
}