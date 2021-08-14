import Image from 'next/image'
import { SearchIcon, GlobeAltIcon, MenuIcon, UserCircleIcon, UsersIcon } from '@heroicons/react/solid'
import { useState } from 'react';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import { useRouter } from 'next/dist/client/router';


function Header({ placeholder }) {
    const [searchInput, setSearchInput] = useState('');
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())
    const [numberOfGuests, setNumberOfGuests] = useState(1)
    const router = useRouter();

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: "selection"
    }
    
    const resetInput = () => {
        setSearchInput('')
    }

    const handleSelect = (ranges) => {
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }

    const search = () => {
        router.push({
            pathname: '/search',
            query: {
                location: searchInput,
                startDate: startDate.toISOString(),
                endDate: endDate.toISOString(),
                guests: numberOfGuests
            }
        })
    }

    return (
        <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10'>
            <div className='flex items-center h-12 my-auto'>
                <div className="relative cursor-pointer flex h-full pr-2 items-center" onClick={router.push('/')}>
                    <Image 
                        src="/logo.jpg"
                        layout="fill"
                        objectFit="contain"
                        objectPosition="left"
                    />
                    <p className="text-red-600 text-xl font-semibold italic z-50 ml-14">SweetStays</p>
                </div>
            </div>
            <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
                <input
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400"
                type="text"
                placeholder={placeholder || "Start your search"}/>
                <SearchIcon className="hidden md:inline-flex h-8 bg-red-600 rounded-full text-white p-2 cursor-pointer md:mx-2"/>
            </div>
            <div className="flex items-center justify-end space-x-4 text-gray-500">
                <p className="hidden md:inline cursor-pointer">Become a host</p>
                <GlobeAltIcon className="h-6 cursor-pointer" />

                <div className="flex items-center space-x-2 border-2 rounded-full p-2">
                    <MenuIcon className="h-6"/>
                    <UserCircleIcon className="h-6"/>
                </div>
                
            </div>
            {searchInput && (
                    <div className="flex flex-col col-span-3 mx-auto">
                        <DateRangePicker 
                            ranges={[selectionRange]}
                            minDate={new Date()}
                            rangeColors={["#FD5B61"]}
                            onChange={handleSelect}
                        />
                        <div className="flex items-center border-b mb-4">
                            <h2 className="text-2xl flex-grow font-semibold">Number of Guests</h2>
                            <UsersIcon className="h-5 text-gray-600"/>
                            <input value={numberOfGuests}
                            type="number"
                            onChange={(e) => setNumberOfGuests(e.target.value)}
                            min={1}
                            className="w-12 pl-2 text-lg outline-none text-red-400 caret-transparent"/>
                        </div>
                        <div className="flex">
                            <button
                            onClick={resetInput}
                            className="flex-grow text-gray-500">Cancel</button>
                            <button
                            onClick={search}
                            className="flex-grow text-red-400">Search</button>
                        </div>
                    </div>
            )}
            
        </header>
    )
}

export default Header
