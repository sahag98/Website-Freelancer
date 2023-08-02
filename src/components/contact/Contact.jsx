import React, { useRef, useState } from 'react'
import './contact.css'
import { BsTelephoneForward } from 'react-icons/bs'
import { CiLocationOn } from 'react-icons/ci'
import { GoLocation } from 'react-icons/go'
import { AiOutlineMail } from 'react-icons/ai'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

const initialValues = {
    user_name: '',
    user_lastname: '',
    user_email: '',
    user_phone: '',
    message: '',
}

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/


const validationSchema = Yup.object({
    user_name: Yup.string().required('Required'),
    user_lastname: Yup.string().required('Required'),
    user_email: Yup.string().email('Invalid email format').required('Required'),
    user_phone: Yup.number().required('Required').positive().integer().typeError('Do not use "-", Must be all numbers'),
    message: Yup.string().required('Required'),
})

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Contact = () => {
    const onSubmit = values => {
        console.log('form data', values)
        try {
            emailjs.send(VITE_SERVICE_ID, VITE_TEMPLATE_ID, values, VITE_PUBLIC_ID)
                .then(() => {
                    formik.resetForm()
                    handleClick();
                });
        }
        catch (err) {
            console.log(err)
        }
    }
    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema
    })

    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
        <div className='contact' id='contact'>
            <div data-aos='zoom-in' className='contact-card'>
                <h1>Contact Directly</h1>
                <div className='icons'>
                    <span>
                        <BsTelephoneForward size={18} style={{ marginRight: 10 }} />
                        <p className='info'>(661) 300-0021</p>
                    </span>
                    <span>
                        <GoLocation size={18} style={{ marginRight: 10 }} />
                        <p>Palmdale, CA</p>
                    </span>
                    <span>
                        <AiOutlineMail size={18} style={{ marginRight: 10 }} />
                        <p>arzsahag@gmail.com</p>
                    </span>
                </div>
            </div>
            <div data-aos='zoom-in-up' className='contact-form'>
                <h1>Send us a <b>message</b></h1>
                <form onSubmit={formik.handleSubmit}>
                    <div>
                        <div>
                            <input
                                value={formik.values.user_name}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                name='user_name'
                                placeholder='Enter your first name'
                            />
                            {formik.touched.user_name && formik.errors.user_name ?
                                <div className='error'>{formik.errors.user_name}</div> : null
                            }
                        </div>
                        <div>
                            <input
                                value={formik.values.user_lastname}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                name='user_lastname'
                                placeholder='Enter your last name'
                            />
                            {formik.touched.user_lastname && formik.errors.user_lastname ?
                                <div className='error'>{formik.errors.user_lastname}</div> : null
                            }
                        </div>
                    </div>
                    <div>
                        <div>
                            <input
                                value={formik.values.user_email}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                name='user_email'
                                placeholder='Enter your email address'
                            />
                            {formik.touched.user_email && formik.errors.user_email ?
                                <div className='error'>{formik.errors.user_email}</div> : null
                            }
                        </div>
                        <div>
                            <input
                                value={formik.values.user_phone}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                name='user_phone'
                                placeholder='Enter your phone number'
                            />
                            {formik.touched.user_phone && formik.errors.user_phone ?
                                <div className='error'>{formik.errors.user_phone}</div> : null
                            }
                        </div>
                    </div>
                    <div className='area'>
                        <div className='text'>
                            <textarea
                                value={formik.values.message}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                name='message' placeholder='Enter your message'
                            />
                            {formik.touched.message && formik.errors.message ?
                                <div className='error'>{formik.errors.message}</div> : null
                            }
                        </div>
                    </div>
                    <Stack spacing={2} sx={{ width: '100%' }}>
                        <motion.button
                            type='submit'

                           
                            className='contact-button'>
                            Send Message
                        </motion.button>
                        <Snackbar open={open} autoHideDuration={8000} onClose={handleClose}>
                            <Alert onClose={handleClose} severity="info" sx={{ width: '100%' }}>
                                Thank you for sending a message! You will be contacted shortly.
                            </Alert>
                        </Snackbar>
                    </Stack>
                </form>
            </div>
        </div>
    )
}

export default Contact