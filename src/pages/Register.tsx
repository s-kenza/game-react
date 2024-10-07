import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const BasicForm = () => (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center sm:py-12">
      <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
        <h1 className="font-bold text-center text-2xl mb-5">Inscription au jeu</h1>  
        <div className="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
          <Formik
            initialValues={{ email: '', password: '', name: '', surname: '', username: '' }}
            validationSchema={Yup.object({
              email: Yup.string().email('Adresse e-mail invalide').required('Champ requis'),
              password: Yup.string().min(6, 'Le mot de passe doit contenir au moins 6 caractères').required('Champ requis'),
              confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Les mots de passe ne correspondent pas').required('Champ requis'),
              name: Yup.string().required('Champ requis'),
              surname: Yup.string().required('Champ requis'),
              username: Yup.string().required('Champ requis'),
            })}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                console.log('Inscrit : ', values.email, values.password, values.name, values.surname, values.username);
                setSubmitting(false);
              }, 400);
            }}
          >
            {({ isSubmitting }) => (
              <Form className="px-5 py-7">
                <div className='mb-5'>
                  <label htmlFor='name' className="font-semibold text-sm text-gray-600 pb-1 block">Nom</label>
                  <Field type="text" name="name" className="border rounded-lg px-3 py-2 mt-1 text-sm w-full" />
                  <ErrorMessage name="name" component="div" className="text-red-500 text-xs" />
                </div>

                <div className='mb-5'>
                  <label htmlFor='surname' className="font-semibold text-sm text-gray-600 pb-1 block">Prénom</label>
                  <Field type="text" name="surname" className="border rounded-lg px-3 py-2 mt-1 text-sm w-full" />
                  <ErrorMessage name="surname" component="div" className="text-red-500 text-xs mt-1" />
                </div>

                <div className='mb-5'>
                  <label htmlFor="username" className="font-semibold text-sm text-gray-600 pb-1 block">Nom d'utilisateur</label>
                  <Field type="text" name="username" className="border rounded-lg px-3 py-2 mt-1 text-sm w-full" /> 
                  <ErrorMessage name="username" component="div" className="text-red-500 text-xs mt-1" />
                </div>

                <div className='mb-5'>
                  <label htmlFor="email" className="font-semibold text-sm text-gray-600 pb-1 block">E-mail</label>
                  <Field type="email" name="email" className="border rounded-lg px-3 py-2 mt-1 text-sm w-full" />
                  <ErrorMessage name="email" component="div" className="text-red-500 text-xs mt-1" />
                </div>

                <div className='mb-5'>
                  <label htmlFor="password" className="font-semibold text-sm text-gray-600 pb-1 block">Mot de passe</label>
                  <Field type="password" name="password" className="border rounded-lg px-3 py-2 mt-1 text-sm w-full" />
                  <ErrorMessage name="password" component="div" className="text-red-500 text-xs mt-1" />
                </div>

                <div className='mb-5'>
                  <label htmlFor="confirmPassword" className="font-semibold text-sm text-gray-600 pb-1 block">Confirmer le mot de passe</label>
                  <Field type="password" name="confirmPassword" className="border rounded-lg px-3 py-2 mt-1 text-sm w-full" />
                  <ErrorMessage name="confirmPassword" component="div" className="text-red-500 text-xs mt-1" />
                </div>

                <button type="submit" disabled={isSubmitting} className="transition duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block">
                  <span className="inline-block mr-2">Je m'inscris</span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 inline-block">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </Form>
            )}
          </Formik>
          
          {/* Additional Buttons and Links */}
          <div className="py-5">
                  <div className="grid grid-cols-2 gap-1">
                    <div className="text-center sm:text-left whitespace-nowrap">
                      <button
                        type="button"
                        className="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-4 h-4 inline-block align-text-top"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
                          />
                        </svg>
                        <span className="inline-block ml-1">Mot de passe oublié ?</span>
                      </button>
                    </div>
                    <div className="text-center sm:text-right whitespace-nowrap">
                      <button
                        type="button"
                        className="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          className="w-4 h-4 inline-block align-text-bottom"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"
                          />
                        </svg>
                        <span className="inline-block ml-1">Aide</span>
                      </button>
                    </div>
                  </div>
                </div>
            </div>
        </div>
     </div>
  );

export default BasicForm;
