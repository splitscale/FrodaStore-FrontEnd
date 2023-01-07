import Head from 'next/head';
import { useState, useEffect } from 'react';
import { AddLink } from '../../components/AddLink';
import NavBar from '../../components/navBar';
import { UrlContainer } from '../../lib/container/UrlContainer';
import { Url } from '../../lib/url/Url';

export default function content() {
  //   const [links, setLinks] = useState<Url[]>([]);

  // onst loadLinks = async () => {
  //     try {

  //       setLinks(res.data.reverse());
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   useEffect(() => {
  //     loadLinks();
  //   }, []);

  const addNewLink = (newLink: Url) => {
    // setLinks([newLink, ...links]);
  };

  const deleteLink = async (link: Url) => {
    // setLinks(links.filter((l: Url) => l.id !== link.id));
  };

  return (
    <div>
      <Head>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/main-logo.png" />
      </Head>

      <NavBar />

      <AddLink onSubmit={addNewLink} />

      <div className="flex flex-col justify-center items-center">
        <table className="outline outline-1 w-[80%] text-center rounded-t">
          <thead className="bg-gradient-to-b from-yellow-500 to-orange-500 text-white">
            <tr>
              <th scope="col" className="px-6 py-3">
                Link
              </th>
              <th scope="col" className="px-6 py-3">
                <i className="bi bi-pencil-square"> Edit </i>
              </th>
              <th scope="col" className="px-6 py-3">
                <i className="bi bi-trash"> Delete </i>
              </th>
            </tr>
          </thead>

          <tbody>
            {links.map((link: UrlContainer) => (
              <tr key={link.id} className="border-b border-current">
                <td className="text-left font-sans px-6 py-3">
                  {link.title}
                  {link.name}
                </td>
                <td>
                  <button className="btn btn-info py-2"> Edit </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger py-2"
                    onClick={() => deleteLink(link)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
