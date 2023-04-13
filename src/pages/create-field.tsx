import React, { Fragment, useState } from 'react'
import Layout from '@/layouts/Layout'
import { ICreateField } from '@/interfaces/field'
import { CreateFieldInitialValues } from '@/constants/field'
import { createFieldService } from '@/services/field.services'
import router from 'next/router'

const CreateField = () => {
    const [field, setField] = useState<ICreateField>(CreateFieldInitialValues);
    const handleCreateField = async (event: React.FormEvent<HTMLFormElement>) => {
        try {
            event.preventDefault()
            await createFieldService(field);
            setField(CreateFieldInitialValues)
            router.push('/')
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <Fragment>
            <Layout>
                <div className="min-h-screen p-6 bg-gray-100 flex items-center justify-center">
                    <div className="container max-w-screen-lg mx-auto">
                        <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-36">
                            <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                                <div className="text-gray-600">
                                    <p className="font-medium text-lg">Create Field</p>
                                    <p>Please fill out all the fields.</p>
                                </div>
                                <div className="lg:col-span-2">
                                    <form onSubmit={handleCreateField}>
                                        <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                                            <div className="md:col-span-5">
                                                <label>Field Name</label>
                                                <input type="text" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                                        setField({ ...field, name: event.target.value })
                                                    }}
                                                />
                                            </div>

                                            <div className="md:col-span-5">
                                                <label>Field Description</label>
                                                <textarea className="h-10 border mt-1 rounded px-4 w-full bg-gray-50 pb-16"
                                                    onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {
                                                        setField({ ...field, description: event.target.value })
                                                    }}
                                                ></textarea>
                                            </div>

                                            <div className="md:col-span-2">
                                                <label>Booking Price</label>
                                                <input type="number" className="h-10 border mt-1 rounded px-4 w-full bg-gray-50" placeholder='0'
                                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                                        setField({ ...field, price_by_slot: event.target.value })
                                                    }}
                                                />
                                            </div>

                                            <div className="md:col-span-2">
                                                <label>Field Category</label>
                                                <select
                                                    className="mt-1 h-10 w-full rounded border bg-gray-50 px-4"
                                                    onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
                                                        setField({ ...field, category: event.target.value })
                                                    }}
                                                    required
                                                >
                                                    <option value={'Football'}>Football</option>
                                                    <option value={'Basketball'}>Basketball</option>
                                                    <option value={'Badminton'}>Badminton</option>
                                                    <option value={'Tennis'}>Tennis</option>
                                                </select>
                                            </div>

                                            <div className="md:col-span-1">
                                                <label>Field Type</label>
                                                <select
                                                    className="mt-1 h-10 w-full rounded border bg-gray-50 px-4"
                                                    onChange={(event: React.ChangeEvent<HTMLSelectElement>) => {
                                                        setField({ ...field, type: event.target.value })
                                                    }}
                                                    required
                                                >
                                                    <option value={'Indoor'}>Indoor</option>
                                                    <option value={'Outdoor'}>Outdoor</option>
                                                </select>
                                            </div>

                                            <div className="md:col-span-5 text-right mt-5">
                                                <div className="inline-flex items-end">
                                                    <button className="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded">Submit</button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </Fragment>
    )
}

export default CreateField