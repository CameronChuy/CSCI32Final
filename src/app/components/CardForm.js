import Field from "./Field"
import Label from "./Label"
import Input from "./Input"
import Button from "./Button"
import { redirect } from "next/navigation"
import { insertCard } from "../utils/supabase-client"

async function createCard(formData) {
    'use server'
    // get each field out of formData 
    // call supabase-client insertCard
    const title = formData.get('title')
    const img = formData.get('img')
    const description = formData.get('description')
    insertCard({ title, img, description })
    redirect("/")
  }
  
  export default function CardForm() {
    return <form action={createCard} className="m-6 p-2 rounded-lg bg-orange-200">
        <Field>
            <Label label="Title" />
            <Input id="title" name="title"/>
        </Field>
        <Field>
            <Label label="Image" />
            <Input id="img" name="img"/>
        </Field>
        <Field>
            <Label label="Description" />
            <Input id="description" name="description"/>
        </Field>
        <div className="flex justify-end">
            <Button type="submit">Add Card</Button>
        </div>
    </form>
  }