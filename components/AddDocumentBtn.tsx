"use client"
import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'

const AddDocumentBtn = ({ userId, email }: AddDocumentBtnProps) => {
    const addDocumentHandler = async() => {
        alert('add document handler')
    }

  return (
    <Button type="submit" className="gradient-blue flex gap-1 shadow-md" 
        onClick={addDocumentHandler}>
        <Image
        src="/assets/icons/add.svg" alt="add"
        width={24} height={24}
        />
        <p className="text-white hidden sm:block">
            Start a Blank Document
        </p>
    </Button>
  )
}

export default AddDocumentBtn