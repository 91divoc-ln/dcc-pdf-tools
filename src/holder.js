export function getEuBrand(holderConfig, euBrandCode) {
    return findNameByCode(holderConfig.euBrands, euBrandCode);
}

export function getEuTestType(holderConfig, testTypeCode) {
    return findNameByCode(holderConfig.euTestTypes, testTypeCode);
}

export function getTestManufacturer(holderConfig, testManufacturerCode) {
    return findNameByCode(
        holderConfig.euTestManufacturers,
        testManufacturerCode
    );
}

export function getVaccineType(holderConfig, vaccineTypeCode) {
    return findNameByCode(holderConfig.euVaccinations, vaccineTypeCode);
}

export function getVaccineManufacturer(holderConfig, vaccineManufacturerCode) {
    return findNameByCode(
        holderConfig.euManufacturers,
        vaccineManufacturerCode
    );
}

export function getNlTestType(holderConfig, testTypeCode) {
    return findNameByCode(holderConfig.euTestTypes, testTypeCode);
}

export function findNameByCode(arr, code) {
    var found = arr.find((item) => item.code === code);
    return found && found.name;
}
