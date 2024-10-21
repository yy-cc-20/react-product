import React, { useState, useEffect } from 'react';
import ProtectedPageLayout from '../../components/UI/ProtectedPageLayout/ProtectedPageLayout';
import api from '../../services/Api';

function MyProfile() { 
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await api.get('/user.json');
                let userid = localStorage.getItem('user id');
                userid = '81dc9bdb-52d4-4dbd-96d4-3b58eeda440a';
                setProfile({
                    username: response.data[userid].username,
                    email: response.data[userid].email
                });
            } catch (error) {
                console.error('Error fetching profile:', error);
            }
        };

        fetchProfile();
    }, []);

    return (
        <ProtectedPageLayout>
            {profile ? ( 
                <>
                    <p>User Name: {profile.username}</p>
                    <p>Email: <a href={'mailto:' + profile.email}> {profile.email}</a></p>
                </>
            ) : (
                <p>Loading profile...</p> 
            )}
        </ProtectedPageLayout>
    );
}

export default MyProfile;