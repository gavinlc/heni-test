import { request, gql } from "graphql-request";
import { useQuery } from "@tanstack/react-query";
import { GetPrintResponse } from "../types/print";



export function usePrints(page = 1) {
    return useQuery<GetPrintResponse, Error>(["prints", { page }], async () => {
        const response = await request(
            'http://localhost:4000/api/graphql?',
            gql`
                query {
                    prints(page: ${ page }) {
                      info {
                        pages
                        page
                      }
                      records {
                        id
                        title
                        dated
                        images {
                          imageid
                          baseimageurl
                        }
                      }
                    }
                  }
                `
        );

        return response;

    })
}