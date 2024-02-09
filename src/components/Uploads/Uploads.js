import React, {useState} from 'react'







  const Uploads = ({ uploadedFiles }) => {
    const [tags, setTags] = useState([]);
  
    const handleAddTag = (fileIndex, selectedTag) => {
      const updatedTags = [...tags];
      updatedTags[fileIndex] = [...(updatedTags[fileIndex] || []), selectedTag];
      setTags(updatedTags);
    };

    const handleRemoveTag = (fileIndex, tagIndex) => {
    const updatedTags = [...tags];
    updatedTags[fileIndex].splice(tagIndex, 1);
    setTags(updatedTags);
  };

  return (
    <div className='w-full pl-10 pr-10 overflow-auto'>
      <p className='text-xl font-semibold text-start md:text-3xl'>Uploads</p>  
      <div className='w-[1065px] bg-[#F5F5F5]  rounded-lg mt-10 '>
      <table className="mt-5 mb-[100px]">
  <thead>
    <tr className='flex justify-between bg-white rounded-lg'>
      <th className='text-lg font-normal w-[80px]'>Sl No.</th>
      <th className='text-lg font-normal w-[250px]'>Links</th>
      <th className='text-lg font-normal w-[250px]'>Prefix</th>
      <th className='text-lg font-normal w-[250px]'>Add Tags</th>
      <th className='text-lg font-normal w-[300px]'>Selected Tags</th>
    </tr>
  </thead>
  <tbody>
    {uploadedFiles.map((file, index) => (
      <tr key={index} className='flex justify-between bg-white rounded-lg mt-5'>
        <td className='text-lg font-normal w-[80px] text-center'>{index + 1}</td>
        <td className='text-lg font-normal w-[250px] text-center'>{file.name}</td>
        <td className='text-lg font-normal w-[250px] text-center'>prefixsample</td>
        <td className='text-lg font-normal w-[250px] text-center'>
          <label htmlFor={`tags-${index}`}>Select Tags:</label>
          <select
            id={`tags-${index}`}
            name={`tags-${index}`}
            onChange={(e) => handleAddTag(index, e.target.value)}
          >
            <option value="Tag-1">Tag 1</option>
            <option value="Tag-2">Tag 2</option>
            <option value="Tag-3">Tag 3</option>
            <option value="Tag-4">Tag 4</option>
            <option value="Tag-5">Tag 5</option>
            <option value="Tag-6">Tag 6</option>
            <option value="Tag-7">Tag 7</option>
            <option value="Tag-8">Tag 8</option>
            <option value="Tag-9">Tag 9</option>
            <option value="Tag-10">Tag 10</option>
          </select>
        </td>
        <td className='text-lg font-semibold flex flex-wrap text-center w-[300px] '>
          {tags[index] &&
            tags[index].map((tag, tagIndex) => (
              <div
                key={tagIndex}
                className='w-[70px] h-[28px] bg-[#605BFF] rounded-md flex justify-center items-center gap-2 m-1'
              >
                <p className='text-white w-[100px]'>{tag}</p>  
                <p
                  className='text-white cursor-pointer'
                  onClick={() => handleRemoveTag(index, tagIndex)}
                >
                  X
                </p>
              </div>
            ))}
        </td>
      </tr>
    ))}
  </tbody>
</table>


{/* <table className='bg-[#F5F5F5]'>
  <tr className='bg-[#F5F5F5]'>
    <th>Sl No.</th>
    <th>Links</th>
    <th>Prefix</th>
    <th>Add Tags</th>
    <th>Selected Tags</th>
  </tr>
  <tr>
    <td>01</td>
    <td>www.google.com</td>
    <td>prefixsample</td>
    <td><label for="tags">Choose a car:</label>

        <select name="tags" id="tags">
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
        </select>
</td>
<td><div className='w-[70px] h-[24px] bg-[#605BFF] rounded-md p-[1px] flex  justify-center items-center gap-2'><p className='text-white'>Tag 1</p> <p className='text-white'>x</p></div></td>
  </tr>
  <tr>
    <td>Centro comercial Moctezuma</td>
    <td>Francisco Chang</td>
    <td>Mexico</td>
  </tr>
</table> */}


      </div>
    </div>
  )
}

export default Uploads
