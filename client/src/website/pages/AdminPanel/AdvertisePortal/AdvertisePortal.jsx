import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createAdvertisement, deleteAdvertisement, fetchAdvertisement, updateAdvertisement } from '../../../redux/actions/adActions';

const cardClasses = ' p-4 rounded-lg shadow-lg flex-1 lg:w-[250px] h-[100px] hover:border-2 hover:border-black bg-gradient-to-b from-orange-300 to-red-300';
const activecardClasses = ' p-4 rounded-lg shadow-lg flex-1 lg:w-[250px] h-[100px] border-2 border-black   bg-gradient-to-b from-red-200 to-red-300 ';
const textClasses = ' font-bold text-card-foreground';
const valueClasses = ' font-bold text-card-foreground';


const CardComponent = ({ isActive, onClick, title, value, content, iconBgColor }) => {
    return (
        <div className={isActive ? activecardClasses : cardClasses} onClick={onClick}>
            <div className="flex items-center space-x-2 mb-2 ">
                <div className={textClasses}>{title}</div>
            </div>
            <div className={valueClasses}>{value}</div>

            <div className="mt-2">
                {content}

            </div>

        </div>
    );
};


export default function AdvertisePortal() {


    const SectionTabs = [
        'Section_0',
        'Section_1',
        'Section_2',
        'Section_3',
    ]

    const ContentTab = [
        {
            Section: 'Section_0',
            title: 'HeroSection'
        },
        {
            Section: 'Section_1',
            title: 'Services'
        },
        {
            Section: 'Section_2',
            title: 'User Friendly Software'
        },
        {
            Section: 'Section_3',
            title: 'Portfolio'
        }
    ]

    const [activeTab, setActiveTab] = useState('Section_0');
    const [sectionTitle, setsectionTitle] = useState('');
    const [sectionTitleId, setSectionTitleId] = useState(null);
    const [ads, setAds] = useState([]);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [section, setSection] = useState('');
    const [advertise_img, setImage] = useState(null);
    const [edit, setEdit] = useState(false);
    const [id, setId] = useState(null);

    const dispatch = useDispatch();

    const { loading, ad, error } = useSelector((state) => state.advertisement);

   

    useEffect(() => {
        dispatch(fetchAdvertisement());
    }, [dispatch]);

    console.log("adevertisements", ad)

    const handleTabClick = (title) => {
        console.log("t", title)
        setActiveTab(title);
        const filteredAds = ad.filter(ad => ad.section === title);
        setAds(filteredAds);
        console.log("this is active tab value: ", activeTab);
    };

    const handleDelete = async (advertisement) => {
        console.log("adver", advertisement)
        const adId = advertisement.id;
         dispatch(deleteAdvertisement(adId));
        window.location.reload()
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Create the form data
        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('section', section);
        if (advertise_img) formData.append('advertise_img', advertise_img);
    
        // If in edit mode, make sure the id is passed correctly
        const advertisementId = id;  // Fetch the id from state
    
        if (edit && advertisementId) {
            console.log("Updating ad with id:", advertisementId);
            // Dispatch the update action with the advertisement ID
            dispatch(updateAdvertisement({ id: advertisementId, title, description, advertise_img }));
        } else {
            console.log("Creating new ad");
            dispatch(createAdvertisement(formData));
        }
        
        // Clear form fields after submitting
        setTitle('');
        setDescription('');
        setSection('');
        setImage(null);
        setEdit(false);  // Reset edit mode
        setId(null);     // Clear ID after submission
    };
    
    

    const Edit = (data) => {
        setTitle(data.title);
        setDescription(data.description)
        setImage(data.advertise_img);
        setId(data.id);
        setEdit(true);
    };


    useEffect(() => {
        const fetchSectionTitles = () => {
            try {
                const titles = ad;

                const filteredTitle = titles.find(title => title.section === activeTab);
                console.log("titles: ", titles);
                console.log("filteredTitle: ", filteredTitle);

                if (filteredTitle) {
                    setsectionTitle(filteredTitle.title);
                    setSectionTitleId(filteredTitle.id);
                }
                else {
                    setsectionTitle('');
                    setSectionTitleId('');
                }

            } catch (error) {
                console.error('Error fetching section titles:', error);
            } finally {
            }
        };

        if (activeTab) {
            fetchSectionTitles();
        }
    }, [activeTab, ad]);



    return (
        <>
            <div className="min-h-screen  bg-gradient-to-b from-purple-200 via-orange-100 to-gray-200 flex justify-center items-center ">
                <div className="bg-[#F8F7F7] bg-opacity-70 shadow-lg rounded-xl border border-gray-200 w-full  max-w-full max-h-full overflow-y-auto flex flex-col justify-start items-center mx-5 my-5 px-5 py-5 overflow-x-hidden ">
                    <h1 className='text-3xl font-bold'>ADVERTISEMENT</h1>
                    <div className="mx-auto ">
                        <div className="flex px-20 py-5 flex-wrap gap-10">
                            {SectionTabs.map((SectionTab) => (
                                <CardComponent
                                    key={SectionTab}
                                    title={SectionTab}
                                    content="Home "
                                    isActive={activeTab === SectionTab}
                                    onClick={() => handleTabClick(SectionTab)}
                                />
                            ))}
                        </div>
                        <div className='overflow-y-scroll flex h-[440px] m-4 justify-between'>
                            <div className='w-[700px]'>
                                {ads.length > 0 ? (

                                    <ul className="divide-y rounded-2xl  bg-[#f0f6f8b0] divide-gray-300  py-1 w-[650px]  ">
                                        {ads
                                            .filter(savedAdvertisement => savedAdvertisement.section == activeTab)
                                            .map((savedAdvertisement) => (
                                                <li key={savedAdvertisement.id} className="py-7 flex rounded-lg p-4  items-center justify-between">
                                                    <div className="flex items-center space-x-4 px-3 ">
                                                        <img src={savedAdvertisement.imageUrl} alt={savedAdvertisement.title} className="w-28 h-28 object-cover rounded-md border bg-purple-100" />
                                                        <div >
                                                            <h3 className="text-xl font-semibold text-gray-800">{savedAdvertisement.title}</h3>
                                                            <p className="mt-2 text-base text-gray-600">{savedAdvertisement.description}</p>
                                                        </div>
                                                    </div>


                                                    <div className=' w-40'>
                                                        <button onClick={() => Edit(savedAdvertisement)} className=' rounded-lg py-2 px-7 mt-7 bg-green-500 font-bold text-white' >UPDATE</button>
                                                        <button onClick={() => handleDelete(savedAdvertisement)} className=' rounded-lg py-2 px-8 mt-7 bg-red-500 font-bold text-white'>DELETE</button>

                                                    </div>
                                                </li>
                                            ))}
                                    </ul>


                                ) : (
                                    <p>No saved Ads available for this section.</p>
                                )}
                            </div>
                            <div className=' fixed ml-[700px]  h-[435px] w-[500px] rounded-xl  bg-[#e0ebf5b0]'>
                                <form className="my-3 m-auto w-96 items-center" onSubmit={handleSubmit} >
                                    <h1 className='text-center text-2xl font-semibold'>{edit ? 'Update' : 'Add'} Data</h1>
                                    <label className="block text-zinc-600 dark:text-zinc-500 mb-1 font-semibold">
                                        Title
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Advertise title"
                                        value={title}
                                        onChange={(e)=>{
                                            setTitle(e.target.value)
                                            console.log(e.target.value)
                                        }}
                                        className="w-[380px] p-2 border-zinc-300 text-black rounded-lg mb-2 border-[1px] dark:bg-input transition duration-150 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                        required
                                    />
                                    <label className="block text-zinc-600 dark:text-zinc-500 mb-1 font-semibold">
                                        Description
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Advertise description"
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                        className="w-[380px] p-2 border-zinc-300 text-black rounded-lg mb-2 border-[1px] dark:bg-input transition duration-150 focus:ring-2 focus:ring-blue-500 focus:outline-none"

                                    />
                                    <label className="block text-zinc-600 dark:text-zinc-500 mb-1 font-semibold">
                                        Section
                                    </label>
                                    <select
                                        type="text"
                                        value={section}
                                        onChange={(e) => setSection(e.target.value)}
                                        className="w-[380px] p-2 border-zinc-300 text-black rounded-lg mb-2 border-[1px] dark:bg-input transition duration-150 focus:ring-2 focus:ring-blue-500 focus:outline-none"

                                    >
                                        <option value="Section Option">Select Section</option>
                                        <option value="Section_0">Section_0</option>
                                        <option value="Section_1">Section_1</option>
                                        <option value="Section_2">Section_2</option>
                                        <option value="Section_3">Section_3</option>
                                    </select>
                                    <label className="block text-zinc-600 dark:text-zinc-500 mb-1 font-semibold">
                                        Upload Image
                                    </label>
                                    <input
                                        type="file"
                                        onChange={(e) => setImage(e.target.files[0])}
                                        className="w-[240px] p-2 text-black rounded-lg mb-3 bg-white transition duration-150 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                        required
                                    />


                                    <div className='w-28 m-auto'>
                                        <button
                                            type='submit'
                                            className="text-center border w-28  py-2 my-3 rounded-lg bg-green-500 font-bold text-white">
                                            {loading ? 'Processing...' : edit ? 'Update' : 'Add'}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
