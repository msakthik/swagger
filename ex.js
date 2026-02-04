import moment from "moment";

const result = [
    {
        onwardData: [
            {
                fare: 100,
                adultFare: 100,
                childFare: 0,
                infantFare: 0,
                netFare: 100,
                taxFare: 0,
                adultCount: 1,
                childCount: 0,
                infantCount: 0,
                ticketId: "123",
                stops: [
                    {
                        airlineCode: "AI",
                        flightNumber: "123",
                        originCode: "DEL",
                        destinationCode: "BOM",
                        departureDateTime: "2023-06-01T10:00:00",
                        arrivalDateTime: "2023-06-01T12:00:00",
                        duration: "2h",
                        origin: "Delhi",
                        destination: "Mumbai",
                        layover: null,
                        stopOver: false,
                        handBaggage: "7kg",
                        checkInBaggage: "15kg",
                        airlineName: "Air India",
                        fareClass: "Economy"
                    }
                ],
                totalSeats: 10,
                isFareChange: false,
                isTimeChange: false,
                iSDomestic: true,
                gstRequired: false
            }
        ],
        returnData: null,
        gstDetails: null
    }
];

const mapFlightDetailsToOnwardFlight = (flight) => ({
    baseFare: flight.fare,
    adultFare: flight.adultFare,
    childfare: flight.childFare,
    infantfare: flight.infantFare,
    netFare: flight.netFare,
    fare: flight.fare,
    taxFare: flight.taxFare,
    adultCount: flight.adultCount,
    childCount: flight.childCount,
    infantCount: flight.infantCount,
    ticketId: flight.ticketId,
    stops: flight.stops?.map((stop) => ({
        airlineCode: stop.airlineCode,
        flightNumber: stop.flightNumber,
        originCode: stop.originCode,
        destinationCode: stop.destinationCode,
        departureDateTime: moment(stop.departureDateTime).toISOString(),
        arrivalDateTime: moment(stop.arrivalDateTime).toISOString(),
        duration: stop.duration,
        origin: stop.origin,
        destination: stop.destination,
        layover: stop.layover ?? undefined,
        stopOver: stop.stopOver,
        handBaggage: stop.handBaggage,
        checkInBaggage: stop.checkInBaggage,
        airlineName: stop.airlineName,
        fareClass: stop.fareClass
    })),
    totalSeats: flight.totalSeats?.toString(),
    isFareChange: flight.isFareChange,
    isTimeChange: flight.isTimeChange,
    iSDomestic: flight.iSDomestic,
    gstRequired: flight.gstRequired
});

const response = {
    message: "",
    onwardFlight: result[0].onwardData?.map(mapFlightDetailsToOnwardFlight),
    returnFlight: result[0].returnData?.map(mapFlightDetailsToOnwardFlight),
    allowBooking: true,
    gstDetails: result[0].gstDetails
};

console.log("response:", response);