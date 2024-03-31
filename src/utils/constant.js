export const apiDomain = `https://27yt4hyj5a.execute-api.us-east-1.amazonaws.com/`;
export const loginUrl = `${apiDomain}electron/login`;

export const testsDataUrl = `${apiDomain}electron/meta`;

export const Urls = {
    testsData: `https://27yt4hyj5a.execute-api.us-east-1.amazonaws.com/electron/meta`,
    colsMapping: `https://27yt4hyj5a.execute-api.us-east-1.amazonaws.com/electron/columnmaping`
}

export const ApiHeaders = {
    headers: { 'Access-Control-Allow-Origin': '*' }
}

export const leftColsMapping = [];
export const rightColsMapping = [
    "Record Serial Number",
    "State",
    "Jump",
    "cycle",
    "steps",
    "Current (A)",
    "Voltage(V)",
    "Capacity(Ah)",
    "Energy(Wh)",
    "Relative Time(h:min:s.ms)"
]