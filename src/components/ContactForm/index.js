import  React, {useState} from "react";
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { CONTACT_FORM_ENDPOINT, PHONE_REGEXP } from "@/utils/constants";
import styled from "styled-components";

const themeColor = 'var(--blue)';


const StyledForm = styled(Form)`
  display: flex;
  flex-direction:column;  
  max-width:41.2rem;
  width:100%;
  align-items:center;    
  font-family: inherit;
  margin:0 auto;
  input, textarea {
    margin-bottom:2.6rem;
  }
  button {
    margin-top:1.2rem;
  };
  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
  }
  @media (max-width:480px) {
    input {
    margin-bottom:2.4rem;
    }
    button {
      margin-top:0;
    };
  }      
`;
const StyledInput = styled('input')`
  box-sizing: border-box;
  width:100%;
  height: 3.9rem;
  border: none;  
  border-bottom: 1px solid ${themeColor};  
  background: inherit;
  text-align: left;
  color:${themeColor};
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
   &:focus {
    border-bottom: 1.5px solid ${themeColor};
    outline: none;
   };
   &::placeholder{
    color:${themeColor};
    font-size: 16px;
    line-height: 19px;
   };
   &:focus::placeholder{
    color:${themeColor};
   };
   @media (max-width:480px) {    
    height: 3.7rem;
    font-size: 12px;
    &::placeholder{    
      font-size: 12px;    
    };
  }
`;
const StyledTextArea = styled.textarea`
  box-sizing: border-box;
  width:100%;
  min-height: 11.4rem;    
  border-bottom: 1px solid ${themeColor}; 
  padding:8px 10px; 
  background: inherit;
  text-align: left;
  color:${themeColor};
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
   &:focus {
    border: 1.5px solid ${themeColor};
    outline: none;
   };
   &::placeholder{
    color:${themeColor};
    font-size: 16px;
    line-height: 19px;
   };
   &:focus::placeholder{
    color:${themeColor};
   };
   @media (max-width:480px) {    
    min-height: 7rem; 
    font-size: 12px;
    &::placeholder{    
      font-size: 12px;    
    };
  }
`;
const Error = styled('span')`
  font-size:1.2rem;
  color:#63090B;
  margin-top:-2rem;
  @media (max-width:480px) {
    font-size:1rem;
  }
`;
const StyledButton = styled.button`
  background: var(--blue);
  font-weight: 400;
  font-size: 11px;
  line-height: 13px;
  letter-spacing: 1px;
  color:#fff;
  padding:16px 0;
  border:none;
  box-shadow:none;
  width:100%;
  text-align:center;  
`;


const ContactFormSchema = Yup.object({
  firstName: Yup.string()
    .max(20, 'Must be 20 characters or less')
    .required('Required'),
  lastName: Yup.string()
    .max(20, 'Must be 20 characters or less')
    .required('Required'),
  message: Yup.string()
    .required('Required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Required'),
  phone: Yup.string().matches(PHONE_REGEXP, 'Invalid phone number')  
});

const ContactForm = () => {  
  const [sentMessage, setSentMessage] = useState(false);
  const [isFetch, setIsFetch] = useState(false);
  const onSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      setIsFetch(true);
      const response = await fetch(CONTACT_FORM_ENDPOINT, { method: 'POST', body: JSON.stringify(values) });
      if (response.ok) {
        setIsFetch(false);
        setSentMessage(true);
        resetForm();
      } else if (response.status === 400) {
        console.log(response);
      }
    } catch (e) {
      console.log(e);
    }
    setSubmitting(false);
  }
  return (           
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
      }}
      onSubmit={onSubmit}
      // onSubmit={(values, { setSubmitting }) => {
      //    setTimeout(() => {
      //      alert(JSON.stringify(values, null, 2));
      //      setSubmitting(false);
      //    }, 400);
      //  }}
      validationSchema={ContactFormSchema}
    >
      {({ errors, touched, isSubmitting }) => (
        <StyledForm  id="consultation_form"> 
          <Field id="firstName" name="firstName" placeholder="First Name" as={StyledInput} />
          {errors.firstName && touched.firstName ? (
            <Error>{errors.firstName}</Error>) : null}
          <Field id="lastName" name="lastName" placeholder="Last Name" as={StyledInput} />
          {errors.lastName && touched.lastName ? (
            <Error>{errors.lastName}</Error>) : null}
          <Field id="phone" name="phone" placeholder="Phone" type="tel" as={StyledInput} />
          {errors.phone && touched.phone ? (
            <Error>{errors.phone}</Error>) : null}
          <Field
            id="email"
            name="email"
            placeholder="Email"
            type="email"
            as={StyledInput}
          />
          {errors.email && touched.email ? (
            <Error>{errors.email}</Error>) : null}
          <Field id="message" name="message" placeholder="Message" as={StyledTextArea} />
          {errors.message && touched.message ? (
            <Error>{errors.message}</Error>) : null}
         
          {sentMessage ? <p>We've received your message and will contact you as soon as possible </p>
          :  <StyledButton  type="Submit" disabled={isSubmitting} >
            <span>{isFetch ? 'sending...' :'SEND'} </span>
          </StyledButton>}
        </StyledForm>
      )}
    </Formik> 
  )
};

export default ContactForm;









