import React, { Component } from 'react';

class SignIn extends Component {
    state = {
        email: '',
        password: ''
    }
    handleChange = (e) => {
        this.setState({
            //state with the name of the id input field being updated : email or password
            //with the value that the user type in
            [e.target.id] : e.target.value
        })
    }
    handleSubmit = (e) => {
        //prevent the page from reloading after submit
        e.preventDefault()
        console.log(this.state)
    }
    render() {
        return (
            <div className='container'>
                <form onSubmit={this.handleSubmit} className='white'>
                    <h5 className='grey-text text-darken-3'>Sign In</h5>
                    <div className='input-field'>
                        <label htmlFor='email'>Email</label>
                        <input type='email' id='email' onChange={this.handleChange}/>
                    </div>
                    <div className='input-field'>
                        <label htmlFor='password'>Password</label>
                        <input type='password' id='password' onChange={this.handleChange}/>
                    </div>
                    <div className='input-field'>
                        <button className='btn pink lighten-1 z-depth z-depth-0'>Login</button>
                    </div>
                </form>
            </div>
        )
    }
    }

export default SignIn;
