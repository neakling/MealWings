import { Stack } from '@chakra-ui/react'

import FilterBoxItems from '../filterBoxItems/filterBoxItems'

const FilterBox = () => {
    return (
        <Stack paddingInline='20px' pt='20px' pb='20px' maxHeight='90vh' overflow='hidden auto'>
            <FilterBoxItems />
        </Stack>
    )
}

export default FilterBox