import { useNavigate } from "react-router"
import { Text } from "@/design/components/text"
import { components } from "@/design/components";
import { useEffect } from "react";

export function InLineDesignComponentsDemo() {
    const navigate = useNavigate();

    useEffect(() => {

    }, [])

    return (
        <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap' }}>
            {
                components.map((item, index) => {
                    return (

                        <div style={{ width: '200px', height: '200px', backgroundColor: '#499A7A', justifyContent: 'center', display: 'flex', alignItems: 'center', borderRadius: 20, margin: 20 }} key={index}
                        onClick={()=> navigate(item.path)}>
                            <Text variant="h5" color="#FFF">{item.name}</Text>
                        </div>
                    )
                })
            }

        </div>
    )
}