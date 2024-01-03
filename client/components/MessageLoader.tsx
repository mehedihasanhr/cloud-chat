import React from 'react'


function times(n: number, callback: (i: number) => void) {
    const items = []
    for (let i = 0; i < n; i++) {
        items.push(callback(i));
    }

    return <>{items}</>
}

const MessageLoader = () => {
    return times(20, (item: number) => {
        let type = ['SEND', 'RECEIVED'][Math.floor(Math.random() * 2)];
        return (
            <div key={item} className='w-full flex flex-col items-start mb-10'>
                <div className={`animate-pulse w-[70%] ${type === "SEND" ? 'ml-auto' : "mr-auto"}`}>
                    <div className='flex items-center justify-between font-medium text-xs pb-1'>
                        {type === 'RECEIVED' &&
                            <div className='flex items-center'>
                                <div className='w-5 h-5 rounded-full bg-slate-200 mr-2' />
                                <span className='flex-1 inline-block w-32 h-3 bg-slate-200 rounded-lg' />
                            </div>
                        }
                        <div className='text-gray-500 ml-auto text-xs w-36 h-2.5 bg-slate-200 rounded-lg' />
                    </div>
                    <div className={`border p-3 rounded-lg text-sm ${type === 'SEND' ? 'bg-blue-500 text-white' : 'bg-slate-50 text-gray-700'}`}>
                        <div className='flex-1 inline-block w-3/4 h-3 bg-slate-200 rounded-lg'>  </div>
                        <div className='flex-1 inline-block w-72 h-3 bg-slate-200 rounded-lg'>  </div>
                    </div>
                </div>
            </div>

        )
    })
}

export default MessageLoader