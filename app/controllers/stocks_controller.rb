class StocksController < ApplicationController
  def search
    if params[:stock]
      @stock = Stock.find_by_ticker(params[:stock])
      @stock ||= Stock.new_from_lookup(params[:stock])
    end

    if @stock.present?
      # render json: @stock
      render partial: 'lookup'
    else
      render status: :not_found, body: nil
    end
  end
end
