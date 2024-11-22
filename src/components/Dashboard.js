import React, { useState, useEffect } from 'react';
import axiosInstance from '../api/axiosInstance';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();
  const [skills, setSkills] = useState([]);
  const [banner, setBanner] = useState({});
  const [experiences, setExperiences] = useState([]);
  const [portfolio, setPortfolio] = useState([]);
  const [services, setServices] = useState([]);
  const [blog, setBlog] = useState([]);
  const [contactInfo, setContactInfo] = useState(null); // Initialize as null to handle no data
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const handleLogout = () => {
    // Clear authentication token or session storage
    localStorage.removeItem('token'); // Assuming token is stored in localStorage
    alert('You have been logged out.');
    navigate('/admin/login'); // Redirect to login page
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [
          skillsRes,
          bannerRes,
          experiencesRes,
          portfolioRes,
          servicesRes,
          blogRes,
          contactInfoRes,
        ] = await Promise.all([
          axiosInstance.get('/skills').catch((err) => {
            console.error('Error fetching skills:', err);
            throw new Error('Failed to fetch skills');
          }),
          axiosInstance.get('/banner').catch((err) => {
            console.error('Error fetching banner:', err);
            throw new Error('Failed to fetch banner');
          }),
          axiosInstance.get('/experience').catch((err) => {
            console.error('Error fetching experiences:', err);
            throw new Error('Failed to fetch experiences');
          }),
          axiosInstance.get('/portfolio').catch((err) => {
            console.error('Error fetching portfolio:', err);
            throw new Error('Failed to fetch portfolio');
          }),
          axiosInstance.get('/services').catch((err) => {
            console.error('Error fetching services:', err);
            throw new Error('Failed to fetch services');
          }),
          axiosInstance.get('/blog').catch((err) => {
            console.error('Error fetching blog:', err);
            throw new Error('Failed to fetch blog');
          }),
          //axiosInstance.get('/contact').catch((err) => {
           // console.error('Error fetching contact info:', err);
           // throw new Error('Failed to fetch contact info');
         // }),
        ]);

        setSkills(skillsRes.data);
        setBanner(bannerRes.data);
        setExperiences(experiencesRes.data);
        setPortfolio(portfolioRes.data);
        setServices(servicesRes.data);
        setBlog(blogRes.data);
        //setContactInfo(contactInfoRes.data || null); // Handle case when no contact info exists
      } catch (err) {
        console.error('Error in fetchData:', err);
        setError(err.message || 'Failed to fetch data. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleAdd = async (endpoint, data, setter) => {
    try {
      const response = await axiosInstance.post(`/admin/${endpoint}`, data);
      setter((prev) => [...prev, response.data]);
    } catch (err) {
      console.error(`Error adding data to ${endpoint}:`, err);
      setError(`Failed to add data to ${endpoint}`);
    }
  };

  const handleDelete = async (endpoint, id, setter) => {
    try {
      await axiosInstance.delete(`/admin/${endpoint}/${id}`);
      setter((prev) => prev.filter((item) => item.id !== id));
    } catch (err) {
      console.error(`Error deleting data from ${endpoint}:`, err);
      setError(`Failed to delete data from ${endpoint}`);
    }
  };

  const handleUpdate = async (endpoint, id, data, setter) => {
    try {
      const url = id ? `/admin/${endpoint}/${id}` : `/admin/${endpoint}`;
      const response = await axiosInstance.put(url, data);
      if (Array.isArray(setter)) {
        setter((prev) =>
          prev.map((item) => (item.id === id ? { ...item, ...response.data } : item))
        );
      } else {
        setter(response.data); // For singular data like banner and contactInfo
      }
    } catch (err) {
      console.error(`Error updating data in ${endpoint}:`, err);
      setError(`Failed to update data in ${endpoint}`);
    }
  };

//   const handleUpdateContactInfo = async () => {
//     const phone = prompt('Enter phone number:', contactInfo?.phone || '');
//     const email = prompt('Enter email address:', contactInfo?.email || '');
//     const address = prompt('Enter address:', contactInfo?.address || '');

//     if (phone && email && address) {
//       try {
//         const response = await axiosInstance.put('/admin/contact', { phone, email, address });
//         setContactInfo(response.data); // Update the local state with the new contact info
//       } catch (error) {
//         console.error('Error updating contact info:', error);
//         setError('Failed to update contact info.');
//       }
//     } else {
//       alert('All fields are required!');
//     }
//   };

//   const handleAddContactInfo = async () => {
//     const phone = prompt('Enter phone number:', '');
//     const email = prompt('Enter email address:', '');
//     const address = prompt('Enter address:', '');

//     if (phone && email && address) {
//       try {
//         const response = await axiosInstance.post('/admin/contact', { phone, email, address });
//         setContactInfo(response.data);
//       } catch (error) {
//         console.error('Error adding contact info:', error);
//         setError('Failed to add contact info.');
//       }
//     } else {
//       alert('All fields are required!');
//     }
//   };

  if (loading) return <p>Loading dashboard...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <div>
      <h1>Admin Dashboard</h1>
      
      <button onClick={handleLogout} style={{ marginBottom: '20px' }}>
        Logout
      </button>

      {/* Banner Section */}
      <section>
        <h2>Banner</h2>
        <img src={banner.image_url} alt="Banner" style={{ maxWidth: '100%' }} />
        <p>
          CV: <a href={banner.cv_url}>{banner.cv_url}</a>
        </p>
        <button
          onClick={() =>
            handleUpdate(
              'banner',
              null, // Assuming banner update does not require ID
              {
                image_url: prompt('New banner image URL:', banner.image_url),
                cv_url: banner.cv_url,
              },
              setBanner
            )
          }
        >
          Update Banner Image
        </button>
        <button
          onClick={() =>
            handleUpdate(
              'banner',
              null, // Assuming banner update does not require ID
              {
                image_url: banner.image_url,
                cv_url: prompt('New CV URL:', banner.cv_url),
              },
              setBanner
            )
          }
        >
          Update CV Link
        </button>
      </section>

      {/* Skills Section */}
      <section>
        <h2>Skills</h2>
        <button
          onClick={() =>
            handleAdd('skills', { name: prompt('Enter skill name:') }, setSkills)
          }
        >
          Add Skill
        </button>
        <ul>
          {skills.map((skill) => (
            <li key={skill.id}>
              {skill.name}
              <button onClick={() => handleDelete('skills', skill.id, setSkills)}>
                Delete
              </button>
              <button
                onClick={() => {
                  const newName = prompt('Update skill name:', skill.name);
                  if (newName) {
                    handleUpdate('skills', skill.id, { name: newName }, setSkills);
                  }
                }}
              >
                Edit
              </button>
            </li>
          ))}
        </ul>
      </section>

      {/* Experiences Section */}
      <section>
        <h2>Experiences</h2>
        <button
          onClick={() =>
            handleAdd(
              'experiences',
              {
                title: prompt('Enter experience title:'),
                description: prompt('Enter experience description:'),
              },
              setExperiences
            )
          }
        >
          Add Experience
        </button>
        <ul>
          {experiences.map((exp) => (
            <li key={exp.id}>
              <h3>{exp.title}</h3>
              <p>{exp.description}</p>
              <button
                onClick={() => handleDelete('experiences', exp.id, setExperiences)}
              >
                Delete
              </button>
              <button
                onClick={() => {
                  const title = prompt('Update experience title:', exp.title);
                  const description = prompt('Update experience description:', exp.description);
                  if (title && description) {
                    handleUpdate('experiences', exp.id, { title, description }, setExperiences);
                  }
                }}
              >
                Edit
              </button>
            </li>
          ))}
        </ul>
      </section>

      {/* Portfolio Section */}
      <section>
        <h2>Portfolio</h2>
        <button
          onClick={() =>
            handleAdd(
              'portfolio',
              {
                project_name: prompt('Enter project name:'),
                description: prompt('Enter project description:'),
              },
              setPortfolio
            )
          }
        >
          Add Portfolio Item
        </button>
        <ul>
          {portfolio.map((proj) => (
            <li key={proj.id}>
              <h3>{proj.project_name}</h3>
              <p>{proj.description}</p>
              <button
                onClick={() => handleDelete('portfolio', proj.id, setPortfolio)}
              >
                Delete
              </button>
              <button
                onClick={() => {
                  const project_name = prompt('Update project name:', proj.project_name);
                  const description = prompt('Update project description:', proj.description);
                  if (project_name && description) {
                    handleUpdate('portfolio', proj.id, { project_name, description }, setPortfolio);
                  }
                }}
              >
                Edit
              </button>
            </li>
          ))}
        </ul>
      </section>

      {/* Services Section */}
      <section>
        <h2>Services</h2>
        <button
          onClick={() =>
            handleAdd(
              'services',
              {
                title: prompt('Enter service title:'),
                description: prompt('Enter service description:'),
              },
              setServices
            )
          }
        >
          Add Service
        </button>
        <ul>
          {services.map((service) => (
            <li key={service.id}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <button
                onClick={() => handleDelete('services', service.id, setServices)}
              >
                Delete
              </button>
              <button
                onClick={() => {
                  const title = prompt('Update service title:', service.title);
                  const description = prompt('Update service description:', service.description);
                  if (title && description) {
                    handleUpdate('services', service.id, { title, description }, setServices);
                  }
                }}
              >
                Edit
              </button>
            </li>
          ))}
        </ul>
      </section>

      {/* Blog Section */}
      <section>
        <h2>Blog</h2>
        <button
          onClick={() =>
            handleAdd(
              'blog',
              {
                title: prompt('Enter blog title:'),
                content: prompt('Enter blog content:'),
              },
              setBlog
            )
          }
        >
          Add Blog Post
        </button>
        <ul>
          {blog.map((post) => (
            <li key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.content}</p>
              <button onClick={() => handleDelete('blog', post.id, setBlog)}>
                Delete
              </button>
              <button
                onClick={() => {
                  const title = prompt('Update blog title:', post.title);
                  const content = prompt('Update blog content:', post.content);
                  if (title && content) {
                    handleUpdate('blog', post.id, { title, content }, setBlog);
                  }
                }}
              >
                Edit
              </button>
            </li>
          ))}
        </ul>
      </section>

      {/* Contact Info Section */}
      {/* <section>
        <h2>Contact Info</h2>
        {contactInfo ? (
          <>
            <p>Phone: {contactInfo.phone}</p>
            <p>Email: {contactInfo.email}</p>
            <p>Address: {contactInfo.address}</p>
            <button onClick={handleUpdateContactInfo}>Update Contact Info</button>
          </>
        ) : (
          <>
            <p>No contact info available.</p>
            <button onClick={handleAddContactInfo}>Add Contact Info</button>
          </>
        )}
      </section> */}
    </div>
  );
}

export default Dashboard;
