import React from 'react';

import Select from 'react-select';
import options from './TempSelectOptions';


export default (props) => {
  return (
    <>
      <Select
        className="basic-single"
        classNamePrefix="select"
        defaultValue={""}
        isDisabled={props.isDisabled}
        isLoading={false}
        isClearable={true}
        isRtl={false}
        isSearchable={true}
        name={props.name}
        options={options}
        placeholder={props.placeholder}
        required
      />

      <div
        style={{
          color: 'hsl(0, 0%, 40%)',
          display: 'inline-block',
          fontSize: 12,
          fontStyle: 'italic',
          marginTop: '1em',
        }}
      >
      </div>
    </>
  );
};