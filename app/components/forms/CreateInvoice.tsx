'use client'

import { IconBaseProps } from "react-icons"
import { Button, Input, InvoiceItem, Select, TextArea } from ".."
import { Fa500Px } from "react-icons/fa"
import { IoAddCircle, IoNavigate } from "react-icons/io5"
import { useInvoice } from "@/app/hooks"
import { InvoiceItem as InvoiceItemType } from "@/app/hooks/useInvoice"
import { ChangeEvent } from "react"

const CreateInvoice: React.FC = () => {

  const { invoiceData, setInvoiceData, handleInvoiceChange, initialInvoiceItemData, 
          initialInvoiceData, setLineItems, lineItems, removeItem, handleItemChange } = useInvoice()

          console.log(invoiceData);
          

  return <div className=" space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <h1>From</h1>
                <TextArea 
                type={"text"} 
                name={"For"} 
                value={undefined}          
                placeholder={""} 
                
                icon={Fa500Px}   
                modifier="textarea w-full outline-none border-none "         
                />
              </div>
              <div className="space-y-2">
                <h1>To</h1>
                <TextArea 
                type={""} 
                name={""} 
                value={undefined}  
                placeholder={""} 
                icon={Fa500Px}    
                modifier="textarea w-full outline-none border-none"           
                />
              </div>
              
            </div>
            <div className="flex items-center gap-2 ">
              <Input icon={IoNavigate} onIcon={false} modifier="input" type={""} name={""} value={undefined} placeholder={"Invoice number"}              
              />
              <Select title="Status" value={invoiceData.status} onChange={handleInvoiceChange} name="status">

                  <option value="draft">Draft</option>
                  <option value="paid">Paid</option>
                  <option value="pending">Pending</option>
                  <option value="overdue">Overdue</option>

              </Select>
              <Input 
              
              modifier="input" 
              type={"text"} 
              name={""} 
              value={invoiceData.issueDate} 
              placeholder={"Issue date"} 
              icon={IoNavigate }              
              />
              <Input onIcon={true} modifier="input"  type={""} name={""} value={undefined} placeholder={""} icon={IoNavigate}              
              />
              <Input modifier="input"  type={""} name={""} value={undefined} placeholder={""} icon={IoNavigate}              
              />
                  
            </div>
            <Input 
              
              modifier="input" 
              type={"text"} 
              name={""} 
              value={invoiceData.issueDate} 
              placeholder={"Title"} 
              icon={IoNavigate }              
              />
            <div className="w-full">
              <h1>Details</h1>
            <div className="divider"></div>
            <div className="w-full flex justify-end">
            <Button
            icon={IoAddCircle}
            text="Add"
            modifier="btn"
            clickEvent={() => setLineItems([...lineItems, initialInvoiceItemData])}
            />
            </div>
            </div>
            {/* Line items */}
            <div className=" space-y-4">
            {lineItems.map((item: InvoiceItemType, i: number) => (
              <InvoiceItem
              
                key={i}
                index={i}
                clickEvent={() => removeItem(i)}
                item={item}
                onChange={(field, value) => handleItemChange(i, field, value)} 
                handleInvoiceChange={ handleInvoiceChange }                />
            ))}
            </div>
            <div className="divider"></div>
            <div className="flex justify-end">
              <div>
                <h1>Subtotal </h1>
                <h1>Taxes </h1>
                <h1 className="font-bold">Total </h1>
                {<h1>Shipping </h1>}
                <h1>Discount </h1>
                <h1></h1>
              </div>
            </div>
        </div>
}

export default CreateInvoice