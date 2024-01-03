import { timeCalculate } from '@/lib/time-calculate'
import Image from 'next/image'
import React from 'react'

type Person = {
    id: string,
    name: string,
    avatar: string,
}

type MessagePropsType = {
    message: {
        id: string,
        senderId: string,
        receiverId: string,
        text: string,
        created_at: Date,
        sender: Person,
        receiver: Person,
        type: "SEND" | "RECEIVED" | string,
    }
}

const Message: React.FC<MessagePropsType> = ({ message }) => {

    return (
        <div className='w-full flex flex-col items-start mb-10'>
            <div className={`w-[70%] ${message.type === "SEND" ? 'ml-auto' : "mr-auto"}`}>
                <Title type={message.type} person={message.type === 'SEND' ? message.sender : message.receiver} time={message.created_at} />
                <MessageBody type={message.type} text={message.text} />
            </div>
        </div>
    )
}

export default Message

// message sender or receiver information
const Title = ({ person, time, type }: { person: Person, time: Date, type: 'SEND' | 'RECEIVED' | string }) => {
    return (
        <div className='flex items-center justify-between font-medium text-xs pb-1'>
            {type === 'RECEIVED' &&
                <div className='flex items-center'>
                    <Image
                        src={person.avatar}
                        alt=''
                        width={100}
                        height={100}
                        className='w-5 h-5 rounded-full bg-slate-500 mr-2'
                    />
                    <span className='flex-1 inline-block'> {person.name}</span>
                </div>
            }
            <div className='text-gray-500 ml-auto text-xs'>
                {timeCalculate(time)}
            </div>
        </div>
    )
}


// message information
const MessageBody = ({ type, text }: { type: string, text: string }) => {
    return (
        <div className={`border p-3 rounded-lg text-sm ${type === 'SEND' ? 'bg-blue-500 text-white' : 'bg-slate-50 text-gray-700'
            }`} dangerouslySetInnerHTML={{ __html: text }} />
    )
}
