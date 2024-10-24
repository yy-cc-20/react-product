import React, { useState, useEffect } from 'react';
import ProtectedPageLayout from '../../components/UI/ProtectedPageLayout/ProtectedPageLayout';
import api from '../../services/Api';
import { useAuth } from '../../services/AuthProvider';

function MyProfile() { 
    const [profile, setProfile] = useState(null);
    const { user } = useAuth();

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await api.get('/user.json');
                setProfile({
                    username: response.data[user.id].username,
                    email: response.data[user.id].email
                });
            } catch (error) {
                console.error('Error fetching profile:', error);
            }
        };

        fetchProfile();
    });

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