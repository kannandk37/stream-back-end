import { Checkbox } from "@/design/components/checkbox";
export const CheckboxCompoenent = () => {

  return (
    <div style={{ margin: 50 }}>
      <h2 style={{ color: '#000' }}>Checkbox</h2>
      <div style={{ display: 'flex', gap: '30px' }}>
        <Checkbox />
        <Checkbox disabled />
      </div>
      <div style={{ display: 'flex', gap: '30px' }}>
        <Checkbox checked={true} />
        <div style={{display:'flex'}}>
          <Checkbox></Checkbox>
          <p style={{color: '#000'}}>Label</p>
        </div>
      </div>
    </div>
  );
}


